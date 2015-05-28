var sql = require('mssql'); 
 
var config = {
    user: '...',
    password: '...',
    server: '...', // You can use 'localhost\\instance' to connect to named instance 
    database: '...',
    
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}
 
var connection = new sql.Connection(config, function(err) {
    // ... error checks 
    
    // Query 
    
    var request = new sql.Request(connection); // or: var request = connection.request(); 
    request.query('select 1 as number', function(err, recordset) {
        // ... error checks 
        
        console.log(recordset);
    });
    
    // Stored Procedure 
    
    var request = new sql.Request(connection);
    request.input('inOt', sql.Int, 2000001);
    //request.output('output_parameter', sql.VarChar(50));
    request.execute('spValidateCAS', function(err, recordsets, returnValue) {
        // ... error checks 
        
        console.log(recordsets);
    });
    
    connection.close();
});