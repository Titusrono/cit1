import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './register/entities/register.entity'; // Ensure this is correct
import { PassportModule } from '@nestjs/passport'; // Import PassportModule if needed for JWT authentication

@Module({
  imports: [
    // Register the Mongoose model for the User schema
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),

    // Configure JwtModule
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'yourSecretKey', // Ensure you use a strong secret key (store in .env)
      signOptions: { expiresIn: '1h' }, // Token expiration time (1 hour here, can be adjusted)
    }),

    // Import PassportModule (if using Passport for authentication)
    PassportModule.register({ defaultStrategy: 'jwt' }), // If you're using Passport for JWT
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule, PassportModule], // Export JwtModule and PassportModule if used in other modules
})
export class AuthModule {}
