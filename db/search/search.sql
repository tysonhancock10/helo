
select username, content, title
from users
join posts
   on users.users_id = posts.user_id
where user_id = ${id}
