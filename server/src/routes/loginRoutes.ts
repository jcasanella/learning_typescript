import { Router, Request, Response, request } from "express";

interface RequestWithBody extends Request {
    body: { [ key:string ]: string | undefined }
}

const router = Router();
router.get('/login', (req: Request, resp: Response) => {
    resp.send(`
        <form method="POST">
            <div>
                <label>Email:</label>
                <input name="email" />
            </div>
            <div>
                <label>Password:</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
        </form>
    `);
});

router.post('/login', (req: RequestWithBody, resp: Response) => {
    const { email, password } = req.body;

    if (email && password && email === 'hi@history.com' && password === 'password') {
        req.session = { loggedIn: true };
        resp.redirect('/');
    } else {
        resp.send('Invalid email or password');
    }
});

router.get('/', (req: Request, resp: Response) => {
    if (req.session?.loggedIn) {
        resp.send(`
            <div>
                <div>You're logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `);
    } else {
        resp.send(`
            <div>
                <div>You're not logged in</div>
                <a href="/logout">Login</a>
            </div>
        `);
    }
});

router.get('/logout', (req: Request, resp: Response) => {
    req.session = undefined;
    resp.redirect('/');
});

export { router };