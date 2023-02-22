import { AppDataSource } from '../database'
import { UserRespository } from '../repositories/UserRepository'
import { User } from '../entities/User'

export class UserService {
  private userRepository: UserRespository
  constructor(userRepository = new UserRespository(AppDataSource.manager)) {
    this.userRepository = userRepository
  }
  createUser = (name: string, email: string, password: string) => {
    const user = new User(name, email, password)
    return this.userRepository.createUser(user)
  }

  getAllUsers = () => {}
}
