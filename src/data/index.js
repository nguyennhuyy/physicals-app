import Realm from "realm";

export const DB_NAME = {
  QUESTION: "question_table",
  ARTICLE: "article_table",
  VIDEO: "video_table",
  VARIABLE: "variable_table",
  FORMULA: "formula_table",
  CONSTANT: "constant_table",
  LESSON: "lesson_table",
  TAG: "tag_table",
  THEORY: "theory_table",
  FORMULA_ARTICLE: "formula_article_table",
  FORMULA_CONSTANT: "formula_constant_table",
  // FORMULA_SOLUTION: "formula_solution_table",
  FORMULA_THEORY: "formula_theory_table",
  FORMULA_VARIABLE: "formula_variable_table",
  QUESTION_CHILD: "question_child_table",
  QUESTION_FORMULA: "question_formula_table",
  // QUESTION_SOLUTION: "question_solution_table",
  QUESTION_THEORY: "question_theory_table",
  TAG_ARTICLE: "tag_article_table",
  TAG_FORMULA: "tag_formula_table",
  TAG_LESSON: "tag_lesson_table",
  TAG_QUESTION: "tag_question_table",
  // TAG_SOLUTION: "tag_solution_table",
  TAG_THEORY: "tag_theory_table",
  TYPE_PRACTICE: "type_practice_table",
};

const questionScheme = {
  name: DB_NAME.QUESTION,
  primaryKey: "id",
  properties: {
    id: "string",
    is_multiple_choice: { type: "string", optional: true },
    is_practice: { type: "string", optional: true },
    type_practice_id: { type: "string", optional: true },
    level_difficult: { type: "string", optional: true },
    order_level_1: { type: "string", optional: true },
    order_level_2: { type: "string", optional: true },
    order_level_3: { type: "string", optional: true },
    order_level_4: { type: "string", optional: true },
    alias: { type: "string", optional: true },
    name: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    name_h2: { type: "string", optional: true },
    intro_content: { type: "string", optional: true },
    content: { type: "string", optional: true },
    answer_a: { type: "string", optional: true },
    answer_b: { type: "string", optional: true },
    answer_c: { type: "string", optional: true },
    answer_d: { type: "string", optional: true },
    correct_answer: { type: "string", optional: true },
    answer_explanation: { type: "string", optional: true },
    admin_note: { type: "string", optional: true },
    is_check: { type: "string", optional: true },
    check_note: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
    created_at: { type: "string", optional: true },
    updated_at: { type: "string", optional: true },
    is_formula: { type: "string", optional: true },
    is_solution: { type: "string", optional: true },
    check_heading: { type: "string", optional: true },
    check_image: { type: "string", optional: true },
  },
};

const articleScheme = {
  name: DB_NAME.ARTICLE,
  primaryKey: "id",
  properties: {
    id: "string",
    alias: { type: "string", optional: true },
    source: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    count_view: { type: "string", optional: true },
    menu: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    created_at: { type: "string", optional: true },
    created_by: { type: "string", optional: true },
    check_heading: { type: "string", optional: true },
    title: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    source_link: { type: "string", optional: true },
    description: { type: "string", optional: true },
    content: { type: "string", optional: true },
    main_tag_id: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
    updated_at: { type: "string", optional: true },
    updated_by: { type: "string", optional: true },
    check_image: { type: "string", optional: true },
  },
};

const videoScheme = {
  name: DB_NAME.VIDEO,
  primaryKey: "id",
  properties: {
    id: "string",
    class: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
    created_by: { type: "string", optional: true },
    updated_by: { type: "string", optional: true },
    video_content_id: { type: "string", optional: true },
    video_vid: { type: "string", optional: true },
    video_src: { type: "string", optional: true },
    video_hash_vid: { type: "string", optional: true },
    script: { type: "string", optional: true },
    parent_id: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    created_at: { type: "string", optional: true },
    updated_at: { type: "string", optional: true },
    video_avatar: { type: "string", optional: true },
    video_id: { type: "string", optional: true },
    video_key: { type: "string", optional: true },
    video_file_path: { type: "string", optional: true },
    data: { type: "string", optional: true },
  },
};

const variableScheme = {
  name: DB_NAME.VARIABLE,
  primaryKey: "id",
  properties: {
    id: "string",
    alias: { type: "string", optional: true },
    name: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    display: { type: "string", optional: true },
    intro_content: { type: "string", optional: true },
    content: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
  },
};

const formulaScheme = {
  name: DB_NAME.FORMULA,
  primaryKey: "id",
  properties: {
    id: "string",
    order_level_1: { type: "string", optional: true },
    order_level_2: { type: "string", optional: true },
    order_level_3: { type: "string", optional: true },
    order_level_4: { type: "string", optional: true },
    alias: { type: "string", optional: true },
    name: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    display: { type: "string", optional: true },
    intro_content: { type: "string", optional: true },
    content: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    video: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
  },
};

const constantScheme = {
  name: DB_NAME.CONSTANT,
  primaryKey: "id",
  properties: {
    id: "string",
    alias: { type: "string", optional: true },
    name: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    display: { type: "string", optional: true },
    value: { type: "string", optional: true },
    intro_content: { type: "string", optional: true },
    content: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
  },
};
const lessonScheme = {
  name: DB_NAME.LESSON,
  primaryKey: "id",
  properties: {
    id: "string",
    parent_id: { type: "string", optional: true },
    name: { type: "string", optional: true },
    alias: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    description: { type: "string", optional: true },
    content: { type: "string", optional: true },
    order_number: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    note: { type: "string", optional: true },
    type: { type: "string", optional: true },
    exam_link: { type: "string", optional: true },
    count_view: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
    created_at: { type: "string", optional: true },
    updated_at: { type: "string", optional: true },
  },
};
const tagScheme = {
  name: DB_NAME.TAG,
  primaryKey: "id",
  properties: {
    id: "string",
    parent_id: { type: "string", optional: true },
    order_level_1: { type: "string", optional: true },
    order_level_2: { type: "string", optional: true },
    order_level_3: { type: "string", optional: true },
    order_level_4: { type: "string", optional: true },
    alias: { type: "string", optional: true },
    name: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    intro_content: { type: "string", optional: true },
    content: { type: "string", optional: true },
    type: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
    is_gallery: { type: "string", optional: true },
  },
};
const theoryScheme = {
  name: DB_NAME.THEORY,
  primaryKey: "id",
  properties: {
    id: "string",
    order_level_1: { type: "string", optional: true },
    order_level_2: { type: "string", optional: true },
    order_level_3: { type: "string", optional: true },
    order_level_4: { type: "string", optional: true },
    alias: { type: "string", optional: true },
    name: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    intro_content: { type: "string", optional: true },
    content: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
  },
};

const formulaArticleScheme = {
  name: DB_NAME.FORMULA_ARTICLE,
  primaryKey: "id",
  properties: {
    id: "string",
    formula_id: { type: "string", optional: true },
    article_id: { type: "string", optional: true },
  },
};
const formulaConstantScheme = {
  name: DB_NAME.FORMULA_CONSTANT,
  primaryKey: "id",
  properties: {
    id: "string",
    formula_id: { type: "string", optional: true },
    constant_id: { type: "string", optional: true },
  },
};
const formulaTheoryScheme = {
  name: DB_NAME.FORMULA_THEORY,
  primaryKey: "id",
  properties: {
    id: "string",
    formula_id: { type: "string", optional: true },
    theory_id: { type: "string", optional: true },
  },
};
const formulaVariableScheme = {
  name: DB_NAME.FORMULA_VARIABLE,
  primaryKey: "id",
  properties: {
    id: "string",
    formula_id: { type: "string", optional: true },
    variable_id: { type: "string", optional: true },
  },
};
const questionChildScheme = {
  name: DB_NAME.QUESTION_CHILD,
  primaryKey: "id",
  properties: {
    id: "string",
    question_id: { type: "string", optional: true },
    name: { type: "string", optional: true },
    name_search: { type: "string", optional: true },
    content: { type: "string", optional: true },
    content: { type: "string", optional: true },
    correct_answer_1: { type: "string", optional: true },
    unit_answer_1: { type: "string", optional: true },
    correct_answer_2: { type: "string", optional: true },
    unit_answer_2: { type: "string", optional: true },
    correct_answer_3: { type: "string", optional: true },
    unit_answer_3: { type: "string", optional: true },
    answer_explanation: { type: "string", optional: true },
    admin_note: { type: "string", optional: true },
    image_one: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
    is_deleted: { type: "string", optional: true },
  },
};
const questionFormulaScheme = {
  name: DB_NAME.QUESTION_FORMULA,
  primaryKey: "id",
  properties: {
    id: "string",
    question_id: { type: "string", optional: true },
    formula_id: { type: "string", optional: true },
  },
};
const questionTheoryScheme = {
  name: DB_NAME.QUESTION_THEORY,
  primaryKey: "id",
  properties: {
    id: "string",
    question_id: { type: "string", optional: true },
    theory_id: { type: "string", optional: true },
  },
};
const tagArticleScheme = {
  name: DB_NAME.TAG_ARTICLE,
  primaryKey: "id",
  properties: {
    id: "string",
    tag_id: { type: "string", optional: true },
    article_id: { type: "string", optional: true },
  },
};
const tagFormulaScheme = {
  name: DB_NAME.TAG_FORMULA,
  primaryKey: "id",
  properties: {
    id: "string",
    tag_id: { type: "string", optional: true },
    formula_id: { type: "string", optional: true },
  },
};
const tagLessonScheme = {
  name: DB_NAME.TAG_LESSON,
  primaryKey: "id",
  properties: {
    id: "string",
    tag_id: { type: "string", optional: true },
    lesson_id: { type: "string", optional: true },
  },
};
const tagQuestionScheme = {
  name: DB_NAME.TAG_QUESTION,
  primaryKey: "id",
  properties: {
    id: "string",
    tag_id: { type: "string", optional: true },
    question_id: { type: "string", optional: true },
  },
};
const tagTheoryScheme = {
  name: DB_NAME.TAG_THEORY,
  primaryKey: "id",
  properties: {
    id: "string",
    tag_id: { type: "string", optional: true },
    theory_id: { type: "string", optional: true },
  },
};
const typePracticeScheme = {
  name: DB_NAME.TYPE_PRACTICE,
  primaryKey: "id",
  properties: {
    id: "string",
    name: { type: "string", optional: true },
    order_number: { type: "string", optional: true },
    is_published: { type: "string", optional: true },
  },
};

export default new Realm({
  path: "physical_database_final.realm",
  schema: [
    questionScheme,
    articleScheme,
    videoScheme,
    variableScheme,
    formulaScheme,
    constantScheme,
    lessonScheme,
    tagScheme,
    theoryScheme,
    formulaArticleScheme,
    formulaConstantScheme,
    formulaTheoryScheme,
    formulaVariableScheme,
    questionChildScheme,
    questionFormulaScheme,
    questionTheoryScheme,
    tagArticleScheme,
    tagFormulaScheme,
    tagLessonScheme,
    tagQuestionScheme,
    tagTheoryScheme,
    typePracticeScheme,
  ],
  schemaVersion: 1,
});
