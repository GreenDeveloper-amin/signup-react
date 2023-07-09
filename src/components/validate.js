export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "نام کاربری را وارد کنید ";
  } else {
    delete errors.name;
  }
  if (!data.email) {
    errors.email = "ایمیل را وارد کنید";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "ایمیل شما اشتباه است";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "پسورد را وارد کنید";
  } else if (data.password.length < 6) {
    errors.password = "پشورد شما باید  از 6 کاراکتر بیشتر باشد";
  } else {
    delete errors.password;
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = "تایید پسورد را وارد کنید";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "پسورد ها باهم مطابقت ندارند";
  } else {
    delete errors.confirmPassword;
  }
  if (data.isAccept) {
    delete errors.isAccept;
  } else {
    errors.isAccept = "شرایط و قوانین را قبول کنید";
  }

  return errors;
};
