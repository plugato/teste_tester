describe("Example", () => {
  beforeAll(async () => {
    console.log("launchingg");
    await device.launchApp({
      newInstance: true,
      launchArgs: {},
    });
    console.log("funcionou");
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const login = async (username, password) => {
    await element(by.id("username_input")).typeText(username);
    await element(by.id("password_input")).typeText(password);
    await element(by.id("login_button")).tap();
  };

  it("should login successfully with valid credentials", async () => {
    await login("username", "password");

    await expect(element(by.text("Login successful!"))).toBeVisible();
  });

  it("should show error message with invalid credentials", async () => {
    await login("invalid_username", "invalid_password");
    await expect(element(by.text("Invalid credentials"))).toBeVisible();
  });
});
