select NAME from u_pe.user inner join u_pe.post on u_pe.post.USER_ID = u_pe.user.USER_ID
where date(CREATED_AT)=curdate() group by user.USER_ID
having count(POST_ID) >= 3;