
export const resolver = {
  Query: {
    Users: async (parent, args, context) => {
      const UserModel = context.databaseConnection.UserModel

      const response = await UserModel.findAll()
      return response
    },
    User: async (parent, args, context) => {
      const UserModel = context.databaseConnection.UserModel

      const response = await UserModel.findOne({ where: { id: args.id } })
      return response
    }
  },
  Mutation: {
    User: async (parent, args, context) => {
      const UserModel = context.databaseConnection.UserModel
      const user = await UserModel.create(args.input)
      return user
    }
  }
}
