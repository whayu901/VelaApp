import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-paper";
import DateTimePicker from "react-native-modal-datetime-picker";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Colors } from "../../config";
import { baseUrl } from "../../utils";
import { reportBarang } from "../../redux/actions";

const Laporan = () => {
  const dispatch = useDispatch();

  const { barang } = useSelector(
    (state) => ({
      barang: state.barang,
    }),
    shallowEqual,
  );

  const [isVisibleBarangMasuk, setVisibleBarangMasuk] = useState(false);
  const [isVisibleBarangKeluar, setVisibleBarangKeluar] = useState(false);
  const [tanggalMulaiBarangMasuk, setTanggalMulaiBarangMasuk] = useState(
    new Date(),
  );
  const [tanggalSelesaiBarangMasuk, setTanggalSelesaiBarangMasuk] = useState(
    new Date(),
  );
  const [tanggalMulaiBarangKeluar, setTanggalMulaiBarangKeluar] = useState(
    new Date(),
  );
  const [tanggalSelesaiBarangKeluar, setTanggalSelesaiBarangKeluar] = useState(
    new Date(),
  );
  const [
    isVisibleDateMulaiBarangMasuk,
    setVisibleDateMulaiBarangMasuk,
  ] = useState(false);
  const [
    isVisibleDateSelesaiBarangMasuk,
    setVisibleDateSelesaiBarangMasuk,
  ] = useState(false);
  const [
    isVisibleDateMulaiBarangKeluar,
    setVisibleDateMulaiBarangKeluar,
  ] = useState(false);
  const [
    isVisibleDateSelesaiBarangKeluar,
    setVisibleDateSelesaiBarangKeluar,
  ] = useState(false);

  const _reportBarangMasuk = async () => {
    // dispatch()
    const mulai = moment(tanggalMulaiBarangMasuk).format("YYYY-MM-DD");
    const selesai = moment(tanggalSelesaiBarangMasuk).format("YYYY-MM-DD");
    const type = "in";
    await dispatch(
      reportBarang({
        tglMulai: mulai,
        tglSelesai: selesai,
        type,
        cb: (e) => _displayPDF(e),
      }),
    );
  };

  const _displayPDF = (link) => {
    Linking.openURL(`${baseUrl.URL_IMG}${link}`);
  };

  const _reportBarangKeluar = async () => {
    const mulai = moment(tanggalMulaiBarangKeluar).format("YYYY-MM-DD");
    const selesai = moment(tanggalSelesaiBarangKeluar).format("YYYY-MM-DD");
    const type = "out";
    await dispatch(
      reportBarang({
        tglMulai: mulai,
        tglSelesai: selesai,
        type,
        cb: (e) => _displayPDF(e),
      }),
    );
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 60 }}>
        <TouchableOpacity
          onPress={() => setVisibleBarangMasuk(!isVisibleBarangMasuk)}>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.primary,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 20,
              zIndex: 1,
              paddingVertical: 5,
              marginHorizontal: 15,
            }}>
            <View style={{ paddingLeft: 15 }}>
              <Text>Barang Masuk</Text>
            </View>
            <View style={{ marginEnd: 10 }}>
              <Icon name="chevron-down-sharp" size={30} />
            </View>
          </View>
        </TouchableOpacity>
        <Animated.View>
          {isVisibleBarangMasuk && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}>
                <View>
                  <Text>Pilih Tanggal Masuk</Text>
                  <TouchableOpacity
                    onPress={() => setVisibleDateMulaiBarangMasuk(true)}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: Colors.black0,
                      }}>
                      {moment(tanggalMulaiBarangMasuk).format("DD MMMM YYYY")}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>Pilih Tanggal Keluar</Text>
                  <TouchableOpacity
                    onPress={() => setVisibleDateSelesaiBarangMasuk(true)}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: Colors.black0,
                      }}>
                      {moment(tanggalSelesaiBarangMasuk).format("DD MMMM YYYY")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginHorizontal: 30, marginTop: 20 }}>
                <Button
                  icon="download"
                  mode="contained"
                  onPress={() => _reportBarangMasuk()}>
                  Download
                </Button>
              </View>
            </View>
          )}
        </Animated.View>
      </View>

      {/* Barang Keluar */}
      <View style={{ marginTop: 70 }}>
        <TouchableOpacity
          onPress={() => setVisibleBarangKeluar(!isVisibleBarangKeluar)}>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.primary,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 20,
              zIndex: 1,
              paddingVertical: 5,
              marginHorizontal: 15,
            }}>
            <View style={{ paddingLeft: 15 }}>
              <Text>Barang Keluar</Text>
            </View>
            <View style={{ marginEnd: 10 }}>
              <Icon name="chevron-down-sharp" size={30} />
            </View>
          </View>
        </TouchableOpacity>
        <Animated.View>
          {isVisibleBarangKeluar && (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}>
                <View>
                  <Text>Pilih Tanggal Keluar</Text>
                  <TouchableOpacity
                    onPress={() => setVisibleDateSelesaiBarangKeluar(true)}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: Colors.black0,
                      }}>
                      {moment(tanggalSelesaiBarangKeluar).format(
                        "DD MMMM YYYY",
                      )}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>Pilih Tanggal Masuk</Text>
                  <TouchableOpacity
                    onPress={() => setVisibleDateMulaiBarangKeluar(true)}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: Colors.black0,
                      }}>
                      {moment(tanggalMulaiBarangKeluar).format("DD MMMM YYYY")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginHorizontal: 30, marginTop: 20 }}>
                <Button
                  icon="download"
                  mode="contained"
                  onPress={() => _reportBarangKeluar()}>
                  Download
                </Button>
              </View>
            </View>
          )}
        </Animated.View>
      </View>

      {/* Tanggal mulai barang masuk */}
      <DateTimePicker
        isVisible={isVisibleDateMulaiBarangMasuk}
        value={tanggalMulaiBarangMasuk}
        mode={"date"}
        display="default"
        onConfirm={(date) => {
          setTanggalMulaiBarangMasuk(date);
          setVisibleDateMulaiBarangMasuk(false);
        }}
        onCancel={() => {
          setVisibleDateMulaiBarangMasuk(false);
        }}
      />

      {/* Tanggal keluar barang masuk */}
      <DateTimePicker
        isVisible={isVisibleDateSelesaiBarangMasuk}
        value={tanggalSelesaiBarangMasuk}
        mode={"date"}
        display="default"
        onConfirm={(date) => {
          setTanggalSelesaiBarangMasuk(date);
          setVisibleDateSelesaiBarangMasuk(false);
        }}
        onCancel={() => {
          setVisibleDateSelesaiBarangMasuk(false);
        }}
      />

      {/* Tanggal mulai barang keluar */}
      <DateTimePicker
        isVisible={isVisibleDateMulaiBarangKeluar}
        value={tanggalMulaiBarangKeluar}
        mode={"date"}
        display="default"
        onConfirm={(date) => {
          setTanggalMulaiBarangKeluar(date);
          setVisibleDateMulaiBarangKeluar(false);
        }}
        onCancel={() => {
          setVisibleDateMulaiBarangKeluar(false);
        }}
      />

      {/* Tanggal selesai barang keluar */}
      <DateTimePicker
        isVisible={isVisibleDateSelesaiBarangKeluar}
        value={tanggalSelesaiBarangKeluar}
        mode={"date"}
        display="default"
        onConfirm={(date) => {
          setTanggalSelesaiBarangKeluar(date);
          setVisibleDateSelesaiBarangKeluar(false);
        }}
        onCancel={() => {
          setVisibleDateSelesaiBarangKeluar(false);
        }}
      />
    </SafeAreaView>
  );
};

export default Laporan;
