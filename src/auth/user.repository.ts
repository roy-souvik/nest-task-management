import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public async signUp(authCredentialsDto: AuthCredentialsDto) {
        const { username, password } = authCredentialsDto;

        const user = new User();
        user.username = username;
        user.password = password;
        await user.save();
    }
}