import arms from "../imgs/arrimg/arms.png"
import belly from "../imgs/arrimg/belly.png"
import breast from "../imgs/arrimg/breast.png"
import buttocks from "../imgs/arrimg/buttocks.png"
import food1 from "../imgs/arrimg/food1.png"
import food2 from "../imgs/arrimg/food2.png"
import food3 from "../imgs/arrimg/food3.png"
import food4 from "../imgs/arrimg/food4.png"
import food5 from "../imgs/arrimg/food5.png"
import food6 from "../imgs/arrimg/food6.png"
import food7 from "../imgs/arrimg/food7.png"
import icon1 from "../imgs/arrimg/icon1.png"
import icon2 from "../imgs/arrimg/icon2.png"
import icon3 from "../imgs/arrimg/icon3.png"
import icon4 from "../imgs/arrimg/icon4.png"
import icon5 from "../imgs/arrimg/icon5.png"
import legs from "../imgs/arrimg/legs.png"
import press1 from "../imgs/arrimg/press1.png"
import press2 from "../imgs/arrimg/press2.png"

export const MOCK_DATA = {
  data: {
    name: "test-day",
    slug: "test-day",
    questions: [
      {
        type: "single",
        options: [
          { label: "Losing Weight", value: "losing_weight" },
          {
            label: "Improve specific body areas",
            value: "improve_specific_body_areas",
          },
          { label: "Gain Muscle", value: "gain_muscle" },
          { label: "Develop Healthy Habits", value: "develop_healthy_habits" },
        ],
        label: "What is your primary goal?",
        key: "primary_goal",
      },
      {
        type: "multiple",
        options: [
          {
            label: "Breast form",
            value: "breast_form",
            img: breast,
          },
          {
            label: "Arms",
            value: "arms",
            img: arms,
          },
          {
            label: "Belly",
            value: "belly",
            img: belly,
          },
          {
            label: "Buttocks",
            value: "buttocks",
            img: buttocks,
          },
          {
            label: "Legs and Thighs",
            value: "legs_and_thighs",
            img: legs,
          },
        ],
        label: "Select body areas you would like to improve:",
        description: "Select all that apply.",
        key: "body_areas",
      },
      {
        type: "single",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        label: "Do you suffer from back pain?",
        key: "back_pain",
      },
      {
        type: "multiple",
        options: [
          { label: "Anxiety or depression", value: "anxiety_or_depression" },
          { label: "Face skin problems", value: "face_skin_problems" },
          { label: "Weak hair or hair loss", value: "weak_hair_or_hair_loss" },
          { label: "Weak nails", value: "weak_nails" },
          {
            label: "Loose skin or strech marks",
            value: "loose_skin_or_strech_marks",
          },
          {
            label: "None of the above",
            value: "none_of_the_above",
            custom: { deselectAll: true },
          },
        ],
        label: "Concerns you have faced after pregnancy:",
        description: "Select all that apply.",
        key: "concerns",
      },
      {
        type: "single",
        options: [
          { label: "I would love to!", value: "i_would_love_to" },
          { label: "I would like to try", value: "i_would_like_to_try" },
          { label: "I am better on my own", value: "i_am_better_on_my_own" },
        ],
        label: "How do you feel about excercising with your baby?",
        key: "excercising",
      },
      {
        type: "single",
        options: [
          {
            label: "Yes",
            value: "yes",
            img: press1,
          },
          {
            label: "No",
            value: "no",
            img: press2,
          },
          { label: "Not sure", value: "not_sure" },
        ],
        label: "Do you suffer from DIASTASIS RECTI ?",
        description:
          "Diastasis recti is the partial or complete separation of the rectus abdominis, or muscles, which meet at the midline of your stomach.",
        key: "diastasis_recti",
      },
      {
        type: "multiple",
        options: [
          {
            label: "Flexibility",
            value: "flexibility",
            img: icon1,
          },
          {
            label: "Aerobic",
            value: "aerobic",
            img: icon2,
          },
          {
            label: "Strength",
            value: "strength",
            img: icon3,
          },
          {
            label: "Others",
            value: "others",
            img: icon4,
          },
          {
            label: "I don\u2019t like workouts",
            value: "i_do_not_like_workouts",
            img: icon5,
            custom: { deselectAll: true },
          },
        ],
        label: "Select type of workouts you like:",
        description: "Select all that apply.",
        key: "workouts",
      },
      {
        type: "single",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
        label: "Are you currently breasfeeding?",
        key: "breastfeeding",
      },
      {
        type: "info",
        label: "Did you know?",
        description:
          "Low impact exercises are completely safe during breastfeeding and do not affect the milk supply or taste.",
        key: "info_block",
      },
      {
        type: "multiple",
        options: [
          {
            label: "Lactose",
            value: "lactose",
            img: food1,
          },
          {
            label: "Eggs",
            value: "eggs",
            img: food2,
          },
          {
            label: "Nuts",
            value: "nuts",
            img: food3,
          },
          {
            label: "Soy",
            value: "soy",
            img: food4,
          },
          {
            label: "Gluten",
            value: "gluten",
            img: food5,
          },
          {
            label: "Fish",
            value: "fish",
            img: food6,
          },
          {
            label: "Shellfish",
            value: "shellfish",
            img: food7,
          },
          {
            label: "None of the Above",
            value: "none",
            custom: { deselectAll: true },
          },
        ],
        label: "What kind of allergies do you have?",
        description: "Select all that apply.",
        key: "allergies",
      },
    ],
  },
}
