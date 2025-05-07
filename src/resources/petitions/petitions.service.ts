import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Petition, PetitionDocument } from './entities/petition.entity';
import { CreatePetitionDto } from './dto/create-petition.dto';
import { UpdatePetitionDto } from './dto/update-petition.dto';

@Injectable()
export class PetitionsService {
  constructor(
    @InjectModel(Petition.name) private petitionModel: Model<PetitionDocument>,
  ) {}

  create(createPetitionDto: CreatePetitionDto) {
    const created = new this.petitionModel(createPetitionDto);
    return created.save();
  }

  findAll() {
    return this.petitionModel.find().exec();
  }

  findOne(id: string) {
    return this.petitionModel.findById(id).exec();
  }

  update(id: string, updatePetitionDto: UpdatePetitionDto) {
    return this.petitionModel.findByIdAndUpdate(id, updatePetitionDto, { new: true });
  }

  remove(id: string) {
    return this.petitionModel.findByIdAndDelete(id);
  }
}
