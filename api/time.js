module.exports = (request, response) => {
    response.setHeader('content-type', 'text/plain');
    response.send(`
      The current time is ${new Date()}
    `);
  };