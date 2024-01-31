import { Controller, Delete, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService) {}
    @Delete(':userid')
    async deleteUser(@Param('userid') userid: number) {
      try {
        await this.userService.remove(userid);
        return { message: 'User deleted successfully' };
      } catch (error) {
        console.error(error);
        return { message: 'Error deleting user' };
      }
    }
}