import { model, models, Schema } from 'mongoose';

const StatsSchema = new Schema({
    totalSold: { type: Number, required: true },
    totalRevenue: { type: Number, required: true },
    mostPopular: { type: String, required: true },
    customerSatisfaction: { type: Number, required: true },
});

const Stats = models?.Stats || model('Stats', StatsSchema);

export default Stats;
