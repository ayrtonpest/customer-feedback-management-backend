import User from '../models/user';

export const createInitialAdmin = async () => {
  const adminEmail = process.env.ADMIN_EMAIL || '';
  const existingAdmin = await User.findOne({ email: adminEmail });
  if (!existingAdmin) {
    const admin = new User({
      name: 'Admin',
      email: adminEmail,
      password: 'adminpassword', // Hashed in model presave hook
      isAdmin: true,
    });
    await admin.save();
    console.log('Initial admin user created');
  } else {
    console.log('Admin user already exists');
  }
};