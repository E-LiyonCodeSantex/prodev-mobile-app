import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  // 🔍 Search Section
  searchGroup: {
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: "#34967C",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 10,
    paddingLeft: 25,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  searchControl: {
    paddingTop: 0,
    color: "#BEBEBE",
  },
  searchButton: {
    backgroundColor: "#FFA800",
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  // 🧭 Filter Section
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 8,
  },
  filterContainer: {
    width: 80,
    height: 72,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 1,
  },

  // 🏘️ Listing Section
  listingContainer: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#DCDCDC",
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
