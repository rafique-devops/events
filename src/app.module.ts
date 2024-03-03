import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import { TicketsModule } from './tickets/tickets.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'rafiquekhan',
      password: '',
      database: 'events',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    // ConfigModule.forRoot(),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     // type: 'mysql',
    //     type: 'postgres',
    //     host: configService.get('HOST'),
    //     port: +configService.get('PORT'),
    //     username: configService.get('USER'),
    //     password: configService.get('PASSWORD'),
    //     database: configService.get('DATABASE'),
    //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    EventsModule,
    TicketsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
