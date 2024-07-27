import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        unique: true
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_pic: {
      type: String,
    }
}, {
    timestamps: true,
});

// Pre-save middleware to generate auto-incremented userId
userSchema.pre('save', async function(next) {
    if (!this.isNew) {
      return next();
    }
  
    try {
        const lastUser = await this.constructor.findOne({}, {}, { sort: { userId: -1 } });
        this.userId = lastUser ? lastUser.userId + 1 : 1;
        next();
      } catch (err) {
        return next(err);
      }
  });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
