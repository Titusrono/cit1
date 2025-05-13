import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetitionsModule } from './resources/petitions/petitions.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './resources/users/users.module';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { ResetpassModule } from './auth/resetpass/resetpass.module';
import { ForgotpassModule } from './auth/forgotpass/forgotpass.module';
import { ReportModule } from './resources/report/report.module';
import { VotecreateModule } from './resources/votecreate/votecreate.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://titusrono:kipngeno@pro.5ant8.mongodb.net/citizen_connect_db?retryWrites=true&w=majority&appName=pro'

    ),
    PetitionsModule,
    AuthModule,
    UsersModule,
    LoginModule,
    RegisterModule,
    ResetpassModule,
    ForgotpassModule,
    ReportModule,
  VotecreateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
