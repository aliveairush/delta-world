import Gender from "../types/Gender";

export const localeGenderRu = (gender: Gender) => {
  switch (gender) {
    case Gender.male: return 'Мужской';
    case Gender.female: return 'Женский';
    default: return "Не указано";
  }
};

export const convertFileToBase64 = (file: File) : Promise<any> => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.onload = () => {
    resolve(fileReader.result);
  };

  fileReader.onerror = (error: any) => {
    reject(error);
  };
});
