const baseUrl = "https://staging-api.seventhave.io";

export const searchUser = async (username) => {
  var config = {
    method: "GET",
    url: `${baseUrl}/users/read/${username}`,
    headers: {},
  };
  try {
    const request = await axios(config);
    if (request.data === null) {
      return { error: "Something went wrong, please try again" };
    } else {
      return { success: console.log(request.data) };
    }
  } catch (error) {
    return { error: error };
  }
};
