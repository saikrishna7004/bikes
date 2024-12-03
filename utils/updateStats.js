'use server'
import Stats from "@/models/Stats";
import connectMongo from "./connectMongo";

const updateStats = async ({ ...stats }) => {
    await connectMongo();
    const updated = await Stats.updateOne({}, stats);
    return updated;
};

export default updateStats;