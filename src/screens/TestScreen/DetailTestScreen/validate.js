import * as Yup from "yup";

export const CREATE_EXERCISE_FORM_TOPIC_SCHEME = Yup.object().shape({
  totalQuestion: Yup.number().required(),
  questionStart: Yup.number()
    .min(1, "validate.questionStartMin")
    .max(Yup.ref("questionEnd"), "validate.questionStartMax")
    .required("validate.questionStart"),
  questionEnd: Yup.number()
    .min(Yup.ref("questionStart"), "validate.questionEndMin")
    .max(Yup.ref("totalQuestion"), "validate.questionEndMax")
    .required("validate.questionEnd"),
  questionTopic: Yup.object().shape({
    title: Yup.string().required("validate.questionTopic"),
    id: Yup.string().required("validate.questionTopic"),
  }),
  workTime: Yup.number()
    .min(1, "validate.workTimeMin")
    .required("validate.workTime"),
});
export const CREATE_EXERCISE_FORM_RANDOM_SCHEME = Yup.object().shape({
  name: Yup.string().required("validate.name"),
  workTime: Yup.number()
    .min(1, "validate.workTimeMin")
    .required("validate.workTime"),
  total: Yup.number()
    .min(1, "validate.totalMin")
    .max(300, "validate.totalMax")
    .required("validate.total"),
});
