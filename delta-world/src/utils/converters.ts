import Gender from "../types/Gender";

export const localeGenderRu = (gender: Gender) => {
  switch (gender) {
    case Gender.male: return 'Мужской';
    case Gender.female: return 'Женский';
    default: return "Не указано";
  }
};
