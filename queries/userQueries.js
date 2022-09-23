const getUsers = `select customer.*, json_agg(book.*) books from customer 
  left join books on books.customer_id = customer.id 
  left join book on books.book_id = book.id group by customer.id`;

const getUserById = `select customer.*, json_agg(book.*) books from customer 
  left join books on books.customer_id = customer.id 
  left join book on books.book_id = book.id 
  where customer.id = $1 group by customer.id`;

const addUser = `insert into customer (first_name, last_name, age, is_free) 
  values ($1, $2, $3, $4)`;

const updateUser = `update customer set first_name = $2, last_name = $3, age = $4, is_free = $5 where id = $1`;

module.exports = { getUsers, getUserById, updateUser, addUser };
