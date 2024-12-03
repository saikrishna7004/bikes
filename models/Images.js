import { model, models, Schema } from 'mongoose';

const imageSchema = new Schema({
    url: String,
    width: Number,
    height: Number,
    alt: String,
    publicId: String,
});

const Image = models?.Image || model('Image', imageSchema);

export default Image;