package com.example.tasks.service;

import com.example.tasks.domain.Task;

public interface TaskService{

    Iterable<Task> list();

    Task save(Task task);
}
