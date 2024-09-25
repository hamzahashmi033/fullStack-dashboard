package net.hamzahashmi.dashboard.entity;


import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "projects")
@Getter
@Setter
public class Project {
    @Id
    private ObjectId id;
    private String title;
    private String category;
    private List<String> tags = new ArrayList<>();
    private String remarks;
}
