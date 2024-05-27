import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    blogId: {
        type: Number,
        unique: true
    },
  title: String,
  description: String,
  userId: Number
}, {
    timestamps: true,
});

// Pre-save middleware to generate auto-incremented userId
blogSchema.pre('save', async function(next) {
    if (!this.isNew) {
      return next();
    }
  
    try {
        const lastUser = await this.constructor.findOne({}, {}, { sort: { blogId: -1 } });
        this.blogId = lastUser ? lastUser.blogId + 1 : 1;
        next();
      } catch (err) {
        return next(err);
      }
  });


const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;