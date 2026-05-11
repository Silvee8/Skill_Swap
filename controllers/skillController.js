import Skill from "../models/skill.js";

export const createSkill = async(req, res) =>{
  try{
    const skill = await Skill.create(req.body);
    return res.status(201).json(skill);
  }
  catch(error){
    return res.status(400).json({message: error.message});
  }
};

export const getSkills = async(req, res)=>{
  try{
    const skills = await skill.find();
    return res.json(skills);

  } catch(error){
    return res.status(500).json({message: error.message});
  }
};