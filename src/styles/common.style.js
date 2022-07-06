import { StyleSheet } from 'react-native'
export const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dayHeader: {
    textAlign: "center",
    fontSize: 16,
    paddingVertical:10
  },
  header: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical:10
  },
  listView: {
    borderWidth: 1, borderColor: "white", borderRadius: 5, padding: 5, shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1
    },
    elevation: 4
  },
  quarter: {
    flex: 0.25
  },
  scrollView: {
    width: "100%",
    margin: 10
  },
  subItem: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})