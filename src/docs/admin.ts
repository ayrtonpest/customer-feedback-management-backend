export const adminSwagger = {
    '/admin/users/{id}': {
      delete: {
        summary: 'Delete a user',
        tags: ['Admin'],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the user to delete',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'User deleted successfully',
          },
          '403': {
            description: 'Forbidden: Admins only',
          },
          '404': {
            description: 'User not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
  };
  