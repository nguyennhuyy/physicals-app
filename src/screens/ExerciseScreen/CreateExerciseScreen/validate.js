import * as Yup from "yup";

export const CREATE_EXERCISE_FORM_SCHEME = Yup.object().shape({
  totalQuestion: Yup.number().required(),
  questionStart: Yup.number()
    .min(1, "validate.questionStartMin")
    .max(Yup.ref("questionEnd"), "validate.questionStartMax")
    .required("validate.questionStart"),
  questionEnd: Yup.number()
    .min(Yup.ref("questionStart"), "validate.questionEndMin")
    .max(Yup.ref("totalQuestion"), "validate.questionEndMax")
    .required("validate.questionEnd"),
  workTime: Yup.number()
    .min(1, "validate.workTimeMin")
    .required("validate.workTime"),
});
