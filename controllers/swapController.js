import Swap from "../models/swap.js";

export const createSwap = async(req, res)=>{
  try{
    const swap = await swap.create(req.body);
    res.status(201).json(swap);

  }catch(error){
    res.status(400).json({message: error.message});
  }
};

export const updateSwapStatus = async(req, res)=>{
    try{
      const {id} = req.params;
      const {status} = req.body;

      const swap = await swap.findByIdAndUpdate(
        id,
        {status},
        {new: true}
      );
      res.json(swap);

    }catch(error){
      res.status(400).json({message: error.message});
    }
};


