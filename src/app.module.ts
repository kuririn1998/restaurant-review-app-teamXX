import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // MySQLのユーザー名
      password: '1qazXSW"', // MySQLのパスワード
      database: 'restaurant_db', // データベース名
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 本番環境ではfalse推奨
    }),
    UserModule,
  ],
})
export class AppModule {}
