import  URL  from "../models/url.model.js";
import nanoid  from "shortid";

export const createShortUrl = async (req, res) => {
    const body = req.body;
    if(!body.url){
        return res.status(400).json({message: "URL is required"});
    }
    let shortId = nanoid(5);
    let url = new URL({
        shortId,
        redirectUrl: body.url,
        visits : []
    });
    try {
        await url.save();
        return res.status(201).json(url);
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}

export const getShortUrl = async (req, res) => {
    const shortId = req.params.shortId;
    try {
        let url = await URL.findOne({shortId});
        if(!url){
            return res.status(404).json({message: "URL not found"});
        }
        return res.status(200).json(url);
    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}

export const visitShortUrl = async (req, res) => {
    const shortId = req.params.shortId;
     const result = await URL.findOne({short});

    if(!result){
        return res.status(404).json({message: "URL not found"});
    }
    result.visits.push({timestamp: Date.now()});
    await result.save();
    return res.status(200).json(result);
}