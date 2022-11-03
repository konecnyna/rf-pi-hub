import { App } from './App';

const server: any = new App().getApp();
const PORT: number = 3000;
server.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
