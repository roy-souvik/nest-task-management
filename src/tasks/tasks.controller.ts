import { Controller, Get, Body, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('/:id')
    public async getAllTasks(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    // @UsePipes(ValidationPipe)
    public createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    // @Get()
    // public async getAllTasks(): Promise<Task[]> {
    //     return this.tasksService.getAllTasks();
    // }
}
