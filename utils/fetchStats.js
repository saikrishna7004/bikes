'use server'
import Stats from "@/models/Stats";
import connectMongo from "./connectMongo";

export const fetchStats = async () => {
    await connectMongo();

    let stats = await Stats.findOne();

    if (!stats) {
        stats = await Stats.create({
            totalSold: 0,
            totalRevenue: 0,
            mostPopular: '-',
            customerSatisfaction: 0,
        });
    }

    stats = await Stats.findOne();

    return JSON.stringify(stats || defaultStats);
};

const defaultStats = {
    totalSold: 12,
    totalRevenue: 750000,
    mostPopular: "PEV S1 Pro",
    customerSatisfaction: 92
};