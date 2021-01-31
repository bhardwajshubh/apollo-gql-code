
export const resolver = {
  Query: {
    Users: async (parent, args, context) => {
      const UserModel = context.databaseConnection.UserModel
      //   let response
      if (args) {
        return UserModel.findOne({ where: { id: args.id } })
      }
      return UserModel.findAll()
    }
  },
  Mutation: {
    User: async (parent, args, context) => {
      const UserModel = context.databaseConnection.UserModel
      console.log(args)
      const user = await UserModel.create(args)
      return user
    }
  }
}
