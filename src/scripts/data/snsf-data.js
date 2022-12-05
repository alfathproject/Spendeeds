const datasource = require('../../SNSFDataSource.json');
const data = [];
datasource.schools.forEach((item) => {
    data.push(item);
});
