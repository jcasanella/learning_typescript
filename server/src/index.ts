import express, { Request, Response } from 'express';

const app = express();
app.get('/', (req: Request, resp: Response) => {
    resp.send(`
        <div>
            <h1>Hi hi!!!</h1>
        </div>
    `);
});
app.listen(3000, () => {
    console.log('Listening on port');
});