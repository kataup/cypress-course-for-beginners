export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // In a real app you would validate credentials here.

  if (body.name !== 'admin' || body.password !== 'pass') {
    return createError({
      statusCode: 401,
      message: 'Invalid credentials'
    });
  }
  return { token: "Bearer my-secret-token" };
});
