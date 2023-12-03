interface IProp {
  username: string;
  email: string;
  avatarUrl: string;
  password?: string;
  passwordConfirm?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {};
  error: string | null;
  editMode?: boolean;
}
const UserForm = ({
  username,
  email,
  avatarUrl,
  password,
  passwordConfirm,
  error,
  editMode,
  onChange,
  handleSubmit,
}: IProp) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full border-2 border-gray-200 px-24 py-16 rounded-lg flex flex-col justify-center items-end shadow-xl space-y-4"
    >
      <label className="flex space-x-2 w-full justify-center items-center">
        <span className="text-xl font-medium text-gray-800 min-w-[150px]">
          Username
        </span>
        <input
          name="username"
          onChange={onChange}
          value={username}
          placeholder="Username"
          type="text"
          className="w-full px-2 py-1.5 outline-none border border-gray-200 rounded-lg"
        />
      </label>
      <label className="flex space-x-2 w-full justify-center items-center">
        <span className="text-xl font-medium text-gray-800 min-w-[150px]">
          Email
        </span>
        <input
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          type="email"
          className="w-full px-2 py-1.5 outline-none border border-gray-200 rounded-lg"
        />
      </label>
      <label className="flex space-x-2 w-full justify-center items-center">
        <span className="text-xl font-medium text-gray-800 min-w-[150px]">
          avatar image
        </span>
        <input
          name="avatarUrl"
          value={avatarUrl}
          onChange={onChange}
          placeholder="URL"
          type="text"
          className="w-full px-2 py-1.5 outline-none border border-gray-200 rounded-lg"
        />
      </label>
      {!editMode && (
        <label className="flex space-x-2 w-full justify-center items-center">
          <span className="text-xl font-medium text-gray-800 min-w-[150px]">
            Password
          </span>
          <input
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            type="password"
            className="w-full px-2 py-1.5 outline-none border border-gray-200 rounded-lg"
          />
        </label>
      )}
      {!editMode && (
        <label className="flex space-x-2 w-full justify-center items-center">
          <span className="text-xl font-medium text-gray-800 min-w-[150px]">
            Password Confirm
          </span>
          <input
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChange}
            placeholder="Password Confirmation"
            type="password"
            className="w-full px-2 py-1.5 outline-none border border-gray-200 rounded-lg"
          />
        </label>
      )}
      {error !== null ? (
        <span className="text-lg font-medium text-red-600 w-full text-center">
          {error}
        </span>
      ) : null}
      <input
        type="submit"
        value="Submit"
        className="px-3 py-1.5 bg-gray-200 rounded-lg"
      />
    </form>
  );
};

export default UserForm;
