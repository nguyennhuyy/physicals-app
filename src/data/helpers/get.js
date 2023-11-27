import database, { DB_NAME } from "../../data";

const getDataOfPage = ({ name, page = 1, limit, search = "", sort = true }) => {
  const skip = (page - 1) * limit;
  if (["lesson_table", "video_table"].includes(name)) {
    return search
      ? JSON.parse(
          JSON.stringify(
            database
              .objects(name)
              .filtered(
                `is_deleted="0" && is_published="1" && parent_id = null && ${search}`
              )
              .sorted("id", sort)
              .slice(skip, skip + limit)
          )
        )
      : JSON.parse(
          JSON.stringify(
            database
              .objects(name)
              .filtered(
                'is_deleted="0" && is_published="1" && parent_id = null'
              )
              .sorted("id", true)
              .slice(skip, skip + limit)
          )
        );
  }
  return search
    ? JSON.parse(
        JSON.stringify(
          database
            .objects(name)
            .filtered(`is_deleted="0" && is_published="1" && ${search}`)
            .sorted("id", sort)
            .slice(skip, skip + limit)
        )
      )
    : JSON.parse(
        JSON.stringify(
          database
            .objects(name)
            .filtered('is_deleted="0" && is_published="1"')
            .sorted("id", true)
            .slice(skip, skip + limit)
        )
      );
};

const getDataByParentId = ({ name, parent_id }) => {
  return JSON.parse(
    JSON.stringify(
      database
        .objects(name)
        .filtered(
          `is_deleted="0" && is_published="1" && parent_id = "${parent_id}"`
        )
    )
  );
};

const getArticleOfPage = ({ page = 1, limit, search = "" }) => {
  const skip = (page - 1) * limit;
  const result = search
    ? JSON.parse(
        JSON.stringify(
          database
            .objects(DB_NAME.ARTICLE)
            .filtered(`is_deleted="0" && is_published="1" && ${search}`)
            .sorted("created_at", true)
        )
      )
    : JSON.parse(
        JSON.stringify(
          database
            .objects(DB_NAME.ARTICLE)
            .filtered('is_deleted="0" && is_published="1"')
            .sorted("created_at", true)
        )
      );
  return result.slice(skip, skip + limit);
};

const getData = ({ name, search = "" }) => {
  return search
    ? JSON.parse(
        JSON.stringify(
          database.objects(name).filtered(search).sorted("id", true)
        )
      )
    : JSON.parse(JSON.stringify(database.objects(name).sorted("id", true)));
};
const getArticleView = () => {
  return JSON.parse(
    JSON.stringify(
      database
        .objects(DB_NAME.ARTICLE)
        .filtered('is_deleted="0" && is_published="1"')
        .sorted("count_view", true)
        .slice(0, 5)
    )
  );
};

const getArticleTag = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.TAG_ARTICLE).filtered(`article_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.tag_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.TAG)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
      )
    );
  }
  return [];
};
const getLessonTag = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.TAG_LESSON).filtered(`lesson_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.tag_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.TAG)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
      )
    );
  }
  return [];
};
const getQuestionFormula = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database
        .objects(DB_NAME.QUESTION_FORMULA)
        .filtered(`question_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.formula_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.FORMULA)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};
const getQuestionTheory = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database
        .objects(DB_NAME.QUESTION_THEORY)
        .filtered(`question_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.theory_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.THEORY)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};

const getTheoryQuestion = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.QUESTION_THEORY).filtered(`theory_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.question_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.QUESTION)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};
const getTheoryFormula = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.FORMULA_THEORY).filtered(`theory_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.formula_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.FORMULA)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};
const getTheoryTag = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.TAG_THEORY).filtered(`theory_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.tag_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.TAG)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
      )
    );
  }
  return [];
};

const getTagFormula = (id) => {
  let result_tags = [id];
  let curent_result = [id];
  for (let i = 1; i < 4; i++) {
    let ids_curent = [];
    curent_result.forEach((item) => {
      let result_child = JSON.parse(
        JSON.stringify(
          database
            .objects(DB_NAME.TAG)
            .filtered(
              `is_deleted="0" && is_published="1" && parent_id = "${item}"`
            )
        )
      ).map((item) => item.id);
      result_tags = [...result_tags, ...result_child];
      ids_curent = [...ids_curent, ...result_child];
    });
    curent_result = ids_curent;
  }
  const filter_tag = result_tags
    .map((item) => `tag_id = "${item}"`)
    .join(" OR ");

  let formulas = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.TAG_FORMULA).filtered(`${filter_tag}`)
    )
  );

  if (formulas.length > 0) {
    const filter_search = formulas
      .map((item) => `id = "${item.formula_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.FORMULA)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};
const getTagTheory = (id) => {
  let result_tags = [id];
  let curent_result = [id];
  for (let i = 1; i < 4; i++) {
    let ids_curent = [];
    curent_result.forEach((item) => {
      let result_child = JSON.parse(
        JSON.stringify(
          database
            .objects(DB_NAME.TAG)
            .filtered(
              `is_deleted="0" && is_published="1" && parent_id = "${item}"`
            )
        )
      ).map((item) => item.id);
      result_tags = [...result_tags, ...result_child];
      ids_curent = [...ids_curent, ...result_child];
    });
    curent_result = ids_curent;
  }
  const filter_tag = result_tags
    .map((item) => `tag_id = "${item}"`)
    .join(" OR ");

  let theorys = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.TAG_THEORY).filtered(`${filter_tag}`)
    )
  );

  if (theorys.length > 0) {
    const filter_search = theorys
      .map((item) => `id = "${item.theory_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.THEORY)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};
const getTagQuestion = (id) => {
  let result_tags = [id];
  let curent_result = [id];
  for (let i = 1; i < 4; i++) {
    let ids_curent = [];
    curent_result.forEach((item) => {
      let result_child = JSON.parse(
        JSON.stringify(
          database
            .objects(DB_NAME.TAG)
            .filtered(
              `is_deleted="0" && is_published="1" && parent_id = "${item}"`
            )
        )
      ).map((item) => item.id);
      result_tags = [...result_tags, ...result_child];
      ids_curent = [...ids_curent, ...result_child];
    });
    curent_result = ids_curent;
  }
  const filter_tag = result_tags
    .map((item) => `tag_id = "${item}"`)
    .join(" OR ");

  let questions = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.TAG_FORMULA).filtered(`${filter_tag}`)
    )
  );

  if (questions.length > 0) {
    const filter_search = questions
      .map((item) => `id = "${item.question_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.QUESTION)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};

const getFormulaVariable = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database
        .objects(DB_NAME.FORMULA_VARIABLE)
        .filtered(`formula_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.variable_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.VARIABLE)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};
const getFormulaTag = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database.objects(DB_NAME.TAG_FORMULA).filtered(`formula_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.tag_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.TAG)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
      )
    );
  }
  return [];
};
const getFormulaQuestion = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database
        .objects(DB_NAME.QUESTION_FORMULA)
        .filtered(`formula_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.question_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.QUESTION)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};

const getVariableFormula = (id) => {
  const result = JSON.parse(
    JSON.stringify(
      database
        .objects(DB_NAME.FORMULA_VARIABLE)
        .filtered(`variable_id = "${id}"`)
    )
  );
  if (result.length > 0) {
    const filter_search = result
      .map((item) => `id = "${item.formula_id}"`)
      .join(" OR ");
    return JSON.parse(
      JSON.stringify(
        database
          .objects(DB_NAME.FORMULA)
          .filtered(`is_deleted="0" && is_published="1" && ${filter_search}`)
          .slice(0, 5)
      )
    );
  }
  return [];
};

const getQuestion = ({ skip, limit }) => {
  return JSON.parse(
    JSON.stringify(
      database
        .objects(DB_NAME.QUESTION)
        .filtered(
          'is_deleted="0" && is_published="1" && is_multiple_choice = "1"'
        )
        .sorted("id", true)
        .slice(skip, skip + limit)
    )
  );
};

module.exports = {
  getDataOfPage,
  getData,
  getArticleTag,
  getArticleView,
  getLessonTag,
  getQuestionFormula,
  getQuestionTheory,
  getTheoryQuestion,
  getTheoryFormula,
  getTheoryTag,
  getArticleOfPage,
  getDataByParentId,
  getTagFormula,
  getTagTheory,
  getTagQuestion,
  getFormulaVariable,
  getFormulaTag,
  getFormulaQuestion,
  getVariableFormula,
  getQuestion,
};
