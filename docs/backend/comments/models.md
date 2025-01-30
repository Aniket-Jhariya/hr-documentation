---
sidebar_position: 2
---
# Models

## Comment
Stores comments on candidates, jobs, or other entities. Tracks comments made by users on candidates or jobs.

### Fields:
- **`user`** (ForeignKey): The user who created the comment.
- **`candidate`** (ForeignKey): The candidate associated with the comment.
- **`content_type`** (CharField): The type of content the comment is associated with (default: "General").
- **`object_id`** (PositiveIntegerField): The ID of the object the comment is associated with.
- **`job`** (ForeignKey): The job associated with the comment (optional).
- **`text`** (TextField): The content of the comment.
- **`created_at`** (DateTimeField): Timestamp when the comment was created.
- **`updated_at`** (DateTimeField): Timestamp when the comment was last updated.
- **`is_deleted`** (BooleanField): Indicates if the comment is deleted (default: `False`).
- **`deleted_by`** (ForeignKey): The user who deleted the comment (optional).

### Methods:
- **`__str__`**: Returns a string representation of the comment 

---

## Reply
Stores replies to comments. Tracks replies made by users to comments.

### Fields:
- **`user`** (ForeignKey): The user who created the reply.
- **`comment`** (ForeignKey): The comment the reply is associated with.
- **`text`** (TextField): The content of the reply.
- **`created_at`** (DateTimeField): Timestamp when the reply was created.
- **`updated_at`** (DateTimeField): Timestamp when the reply was last updated.

### Methods:
- **`__str__`**: Returns a string representation of the reply 
---

## Like
Stores likes on comments or other entities. Tracks likes made by users on comments or other content.

### Fields:
- **`user`** (ForeignKey): The user who created the like.
- **`content_type`** (CharField): The type of content the like is associated with (default: "General").
- **`object_id`** (PositiveIntegerField): The ID of the object the like is associated with.
- **`job`** (ForeignKey): The job associated with the like (optional).
- **`created_at`** (DateTimeField): Timestamp when the like was created.

### Methods:
- **`__str__`**: Returns a string representation of the like 