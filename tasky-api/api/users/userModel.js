import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true }
});

const passwordValidator = (password) => {
  // Regex for at least one letter, one number, one special character, and min 8 chars
  const userPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return userPassword.test(password);
};
  
  UserSchema.path("password").validate(passwordValidator)


export default mongoose.model('User', UserSchema);
