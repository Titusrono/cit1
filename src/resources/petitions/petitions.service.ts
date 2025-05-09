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

  async create(createPetitionDto: CreatePetitionDto, file: Express.Multer.File) {
    // If a file is uploaded, store its filename
    const petitionData: any = {
      ...createPetitionDto,
      supportingDocs: file ? file.filename : null,  // Store filename if file is uploaded
    };

    const created = new this.petitionModel(petitionData);
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
