import { Controller, Get, Body, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('/:id')
    public async getAllTasks(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    // @UsePipes(ValidationPipe)
    public async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    public async updateTaskStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status') status: TaskStatus
    ): Promise<Task> {
        return this.tasksService.updateTaskStatus(id, status);
    }



    // @Get()
    // public async getAllTasks(): Promise<Task[]> {
    //     return this.tasksService.getAllTasks();
    // }
}
