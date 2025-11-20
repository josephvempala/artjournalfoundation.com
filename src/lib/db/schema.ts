import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const formSubmissions = sqliteTable('form_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  formName: text('form_name').notNull(),
  data: text('data', { mode: 'json' }).notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
    index('form_name_idx').on(table.formName),
    index('created_at_idx').on(table.createdAt),
]);



export const registrations = sqliteTable('registrations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  competition: text('competition').notNull(),
  studentName: text('student_name').notNull(),
  schoolName: text('school_name').notNull(),
  email: text('email').notNull(),
  contact: text('contact').notNull(),
  grade: text('grade').notNull(),
  category: text('category').notNull(),
  place: text('place').notNull(),
  instagramHandle: text('instagram_handle'),
  paymentMethod: text('payment_method').notNull(),
  amount: integer('amount').notNull(),
  currency: text('currency').notNull(),
  razorpayOrderId: text('razorpay_order_id'),
  razorpayPaymentId: text('razorpay_payment_id'),
  paymentStatus: text('payment_status').default('pending').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
    index('registrations_competition_idx').on(table.competition),
    index('registrations_email_idx').on(table.email),
    index('registrations_razorpay_order_id_idx').on(table.razorpayOrderId),
]);