import mysql from 'mysql';

class Connection {
    private conn: mysql.Connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tindev',
    });

    public connectDatabase(): mysql.Connection {
        this.conn.connect(err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Database connected');
            }
        })

        return this.conn;
    }
}

export default new Connection();